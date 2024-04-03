
export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : env.PUBLIC_DOMAIN + ':3000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={''} />
    );
  }