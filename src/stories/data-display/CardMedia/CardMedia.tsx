import { CardMediaStyled } from "./CardMedia.style";
import { MEDIA_COMPONENTS } from "./CardMedia.constant";
import { CardMediaProps, SizeCardMedia } from "./CardMedia.type";

export const CardMedia = ({
  src,
  image,
  children,
  background,
  component = "div",
  ...props
}: CardMediaProps & SizeCardMedia) => {
  const isMediaComponent = MEDIA_COMPONENTS.includes(component as string);
  const composedStyle = !isMediaComponent && image ? { backgroundImage: `url("${image}")` } : {};

  return (
    <CardMediaStyled
      as={component}
      style={composedStyle}
      background={background}
      isMediaComponent={isMediaComponent}
      src={isMediaComponent ? image || src : undefined}
      {...(!isMediaComponent && image ? { role: "img", "aria-label": "card-media" } : {})}
      {...props}
    >
      {children}
    </CardMediaStyled>
  );
};
