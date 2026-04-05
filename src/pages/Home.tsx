import Button from "../components/common/Button";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import { formatNumber } from "../utils/format";

function Home() {
  const COUNT = 10000;
  return (
    <>
      <Title size="large">
        도서 몰
      </Title>
      <div>count: {formatNumber(COUNT)}</div>
      <Button size="large" schema="primary">
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력하세요" />
    </>
  );
}

export default Home;