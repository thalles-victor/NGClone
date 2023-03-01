import { styled } from "../styles/stitches";

export default function Home() {
  return (
    <HomeContainer>
      <h1>NG - Frondend</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled("div", {
  backgroundColor: "$orange",
  color: "$text-color",
});
