import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";
import { useState, useCallback, useMemo } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  // 📌 useCallback Hook: kno akta callback function ke mne rake

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }

    return count1 % 2 === 0;
  }, [count1]);

  // 📌 useMemo: Kno function retun value ke mne rake, defendancy jodi change hoi ta hle new kre calculate korbe,and return value ta ber korbe.but count one bade onno kicu change hle memory age je value ta cilo tai return kre dei.


  return (
    <div className="container mx-auto py-5">
      <Title />
      <ShowCount count={count1} title="Counter 1" />

      <span>{isEven ? "Even" : "Odd"}</span>

      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr className="mt-2" />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  )
}
