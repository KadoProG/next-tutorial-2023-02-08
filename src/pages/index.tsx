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
  width: 170px;
  height: 170px;
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
  width: 340px;
  height: 170px;
  font-size: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer; 
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 680px;
    height: 680px;
    background: rgb(200,200,200);
    border-radius: 50%;
    transform: scale(0);
    transition: 0.4s;
    z-index: -1;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
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
