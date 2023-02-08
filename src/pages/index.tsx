import Hello from "@/components/Hello";
import { FC, use, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const TextHello = styled.div`
  font-size: 30px;
  font-weight: bold;
  background: rgb(240,240,240);
  color: black;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextCount = styled.p`
  background: rgb(240,240,240);
  width: 200px;
  height: 200px;
  margin: 0;
  margin-left: 10px;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: 80px;
`;

const BtnUI = styled.button`
  background: rgb(240,240,240);
  border: none;
  width: 400px;
  height: 200px;
  font-size: 20px;
  cursor: pointer;
`;

const DivFlex = styled.div`
  display: flex;
`;

const Home: FC = () => {

  const [count, setCount] = useState(0);

  const onCountUp = () => {
    setCount(count + 1);
  }

  const calcSquare = (w: number, h: number) : number => {
    return w*h;
  };

  const calcResult = useMemo(() => calcSquare(count, count),[count]);
  // const onCountUp = useMemo(()=> {
  //   setCount(count + 1);
  // },[count]);
  console.log("実行されました()");

  useEffect(()=> {
    console.log("実行されました(useEffect)");
  },[])

  return (
    <>
    <Hello message="こんにちは" />
    <TextHello>Hello World</TextHello>
    <DivFlex>
      <BtnUI onClick={() => onCountUp()}>ボタン</BtnUI>
      <TextCount>{count}</TextCount>
      <TextCount>{calcResult}</TextCount>
    </DivFlex>
    </>
  )
}

export default Home
