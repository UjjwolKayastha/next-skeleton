//Helpers
import { calcTime, convertMoney } from "../../../utils";

//Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

import React from "react";

interface MovieInfoProps {
  time: number;
  budget: number;
  revenue: number;
  language: string;
}

export const MovieInfoBar = ({
  time,
  budget,
  revenue,
  language,
}: MovieInfoProps) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Duration: {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Box Office: {convertMoney(revenue)}</p>
        </div>
        <div className="column">
          <p>
            Language{language.split(",").length > 1 ? "s" : ""}: {language}
          </p>
        </div>
      </Content>
    </Wrapper>
  );
};
