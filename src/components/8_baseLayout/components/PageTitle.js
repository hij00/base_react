import { Helmet } from "react-helmet-async";

export const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  );
};

// title은 변수로(프롭스)
// title 내용입력 => text={"name"}
