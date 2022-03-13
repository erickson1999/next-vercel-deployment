import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties } from "react";

const stylesActiveLink: CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  backgroundColor: "black",
  padding: "10px",
  borderRadius: "5px",
};
const stylesNormalLink: CSSProperties = {
  color: "#000000",
  textDecoration: "none",
  backgroundColor: "#ffffff",
  padding: "10px",
  borderRadius: "5px",
};

interface Props {
  titleLink: string;
  href: string;
}
export const ActiveLink = ({ titleLink, href, ...props }: Props) => {
  const router = useRouter();
  const { pathname } = router;
  console.log(router);
  return (
    <Link href={href} {...props}>
      <a style={pathname === href ? stylesActiveLink : stylesNormalLink}>
        {titleLink}
      </a>
    </Link>
  );
};
