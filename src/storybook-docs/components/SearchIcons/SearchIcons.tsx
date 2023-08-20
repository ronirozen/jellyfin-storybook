import {
  memo,
  useMemo,
  useState,
  useEffect,
  MouseEvent,
  useCallback,
  ChangeEvent,
  useTransition
} from "react";
import {
  Grid,
  Radio,
  Button,
  Dialog,
  Tooltip,
  useTheme,
  RadioGroup,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel
} from "@mui/material";
import { Search } from "@mui/icons-material";

import {
  StyledGrid,
  StyledIcon,
  StyledForm,
  StyledPaper,
  StyledInput,
  StyledCanvas,
  StyledSvgIcon,
  StyledContext,
  StyledFontSize,
  StyledSkeleton,
  StyledVirtuosoGrid
} from "./SearchIcons.style";
import { PATH_LIBRARY } from "constants/";
import { useLatest } from "hooks/useLatest";
import { IconButton, Typography } from "stories";
import type { IconType } from "./SearchIcons.type";
import { SyntaxHighlighter } from "../SyntaxHighlighter";
import { formatNumber, selectNode } from "./SearchIcons.utils";
import { allIcons, allIconsMap, searchIndex } from "./SearchIcons.constants";

const Icons = memo((props: { icons: IconType[]; handleOpenClick: (event: MouseEvent) => void }) => {
  const { icons, handleOpenClick } = props;

  const handleLabelClick = (event: MouseEvent) => {
    selectNode(event.currentTarget);
  };

  return (
    <StyledVirtuosoGrid
      totalCount={icons.length}
      overscan={200}
      components={{
        Item: StyledIcon,
        ScrollSeekPlaceholder: () => (
          <StyledIcon>
            <StyledSkeleton variant="circular" width={35} height={35} />
          </StyledIcon>
        )
      }}
      itemContent={index => (
        <>
          <StyledSvgIcon
            tabIndex={-1}
            fontSize="large"
            onClick={handleOpenClick}
            // @ts-ignore
            title={icons[index].importName}
            component={icons[index].Component}
          />
          <div>
            <div onClick={handleLabelClick}>{icons[index].importName}</div>
          </div>
        </>
      )}
      scrollSeekConfiguration={{
        enter: (velocity: number) => Math.abs(velocity) > 1000,
        exit: (velocity: number) => Math.abs(velocity) < 1000
      }}
    />
  );
});

const DialogDetails = memo(function DialogDetails(props: {
  open: boolean;
  handleClose: () => void;
  selectedIcon?: IconType | null;
}) {
  const theme = useTheme();
  const { open, selectedIcon, handleClose } = props;

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      {selectedIcon ? (
        <>
          <DialogTitle>
            <Typography variant="inherit">{selectedIcon.importName}</Typography>
          </DialogTitle>
          <SyntaxHighlighter
            bordered
            copyable
            language="tsx"
            dark={theme.palette.mode === "dark"}
            className="docblock-source sb-unstyled"
          >
            {`import { ${selectedIcon.importName} } from '${PATH_LIBRARY}/icons'`}
          </SyntaxHighlighter>
          <DialogContent>
            <Grid container>
              <Grid item xs>
                <Grid container justifyContent="center">
                  <StyledCanvas component={selectedIcon.Component} />
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container alignItems="flex-end" justifyContent="center">
                  <Grid item>
                    <Tooltip title="fontSize small">
                      <StyledFontSize as={selectedIcon.Component} fontSize="small" />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize medium">
                      <StyledFontSize as={selectedIcon.Component} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize large">
                      <StyledFontSize as={selectedIcon.Component} fontSize="large" />
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <StyledContext component={selectedIcon.Component} contextColor="primary" />
                  <StyledContext component={selectedIcon.Component} contextColor="primaryInverse" />
                </Grid>
                <Grid container justifyContent="center">
                  <StyledContext component={selectedIcon.Component} contextColor="textPrimary" />
                  <StyledContext component={selectedIcon.Component} contextColor="textPrimaryInverse" />
                </Grid>
                <Grid container justifyContent="center">
                  <StyledContext component={selectedIcon.Component} contextColor="textSecondary" />
                  <StyledContext component={selectedIcon.Component} contextColor="textSecondaryInverse" />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{"close"}</Button>
          </DialogActions>
        </>
      ) : (
        <div />
      )}
    </Dialog>
  );
});

export function SearchIcons() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("Filled");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [keys, setKeys] = useState<string[] | null>(null);

  const [, startTransition] = useTransition();
  const dialogSelectedIcon = useLatest(selectedIcon ? allIconsMap.get(selectedIcon) : null);

  const icons = useMemo(
    () =>
      (keys === null ? allIcons : keys.map(key => allIconsMap.get(key))).filter(
        icon => theme === icon?.theme
      ),
    [theme, keys, allIconsMap]
  );

  useEffect(() => {
    (async () => {
      if (query === "") {
        setKeys(null);
      } else {
        const results = (await searchIndex.searchAsync(query, { limit: 3000 })) as string[];
        setKeys(results);
      }
    })();
  }, [query]);

  const handleOpenClick = useCallback(
    (event: MouseEvent) => {
      setSelectedIcon(event.currentTarget.getAttribute("title") || "");
    },
    [setSelectedIcon]
  );

  const handleClose = useCallback(() => {
    setSelectedIcon("");
  }, [setSelectedIcon]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      startTransition(() => {
        setQuery(e.target.value);
      });
    },
    [setQuery]
  );

  return (
    <StyledGrid container spacing={2} sx={{ my: 2 }}>
      <Grid item xs={12} sm={15} md={3}>
        <StyledForm>
          <Typography fontWeight={500}>Filter the style</Typography>
          <RadioGroup>
            {["Filled", "Outlined", "Rounded", "Two tone", "Sharp"].map(currentTheme => (
              <FormControlLabel
                key={currentTheme}
                label={currentTheme}
                control={
                  <Radio
                    size="small"
                    value={currentTheme}
                    checked={theme === currentTheme}
                    onChange={() => setTheme(currentTheme)}
                  />
                }
              />
            ))}
          </RadioGroup>
        </StyledForm>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        <StyledPaper>
          <IconButton aria-label="search">
            <Search />
          </IconButton>
          <StyledInput
            autoFocus
            value={query}
            onChange={handleChange}
            placeholder="Search icons…"
            inputProps={{ "aria-label": "search icons" }}
          />
        </StyledPaper>
        <Typography>{`${formatNumber(icons.length)} matching results`}</Typography>
        <Icons icons={icons} handleOpenClick={handleOpenClick} />
      </Grid>
      <DialogDetails open={!!selectedIcon} selectedIcon={dialogSelectedIcon} handleClose={handleClose} />
    </StyledGrid>
  );
}
