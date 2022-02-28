import React, { useEffect, useState } from "react";
import Block from "./Block";
import Stack from "@mui/material/Stack";
import "../Styles/BlocksList.css";
import I1 from "../Images/1a.png";
import I2 from "../Images/2a.png";
import I3 from "../Images/3a.png";
import I4 from "../Images/4a.png";
import I5 from "../Images/5a.png";
import I6 from "../Images/6a.png";
import I7 from "../Images/7a.png";
import I8 from "../Images/8a.png";
import I9 from "../Images/9a.png";
import I10 from "../Images/10a.png";
import I11 from "../Images/11a.png";
import I12 from "../Images/12a.png";
import I13 from "../Images/13a.png";
import I14 from "../Images/14a.png";
import I15 from "../Images/15a.png";
import I16 from "../Images/16a.png";

export default function BlocksList() {
  const [rows, setRows] = useState([]);
  const ImagesList = [
    I1,
    I2,
    I3,
    I4,
    I5,
    I6,
    I7,
    I8,
    I9,
    I10,
    I11,
    I12,
    I13,
    I14,
    I15,
    I16,
  ];
  const [xFirst, setXFirst] = useState(0);
  const [yFirst, setYFirst] = useState(0);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  const listItem = () => {
    var listImg = [];

    for (let id = 0; id < 128; id++) {
      if (id % 2 == 0) {
        listImg.push(ImagesList[getRandomInt(ImagesList.length)]);
      } else {
        listImg.push(listImg[id - 1]);
      }
    }

    const shuffleArray = shuffle(listImg);

    var imgsRow0 = [{ id: -1, hidden: true }];
    var imgsRow1 = [{ id: -1, hidden: true }];
    var imgsRow2 = [{ id: -1, hidden: true }];
    var imgsRow3 = [{ id: -1, hidden: true }];
    var imgsRow4 = [{ id: -1, hidden: true }];
    var imgsRow5 = [{ id: -1, hidden: true }];
    var imgsRow6 = [{ id: -1, hidden: true }];
    var imgsRow7 = [{ id: -1, hidden: true }];
    var imgsRow8 = [{ id: -1, hidden: true }];
    var imgsRow9 = [{ id: -1, hidden: true }];

    for (let i = 0; i < shuffleArray.length; i++) {
      if (i >= 0 && i < 16) {
        imgsRow0.push({ id: -1, hidden: true });
        imgsRow9.push({ id: -1, hidden: true });
        imgsRow1.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 16 && i < 32) {
        imgsRow2.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 32 && i < 48) {
        imgsRow3.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 48 && i < 64) {
        imgsRow4.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 64 && i < 80) {
        imgsRow5.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 80 && i < 96) {
        imgsRow6.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 96 && i < 112) {
        imgsRow7.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
      if (i >= 112 && i < 128) {
        imgsRow8.push({ id: shuffleArray[i], hidden: false, selected: false });
      }
    }
    imgsRow0.push({ id: -1, hidden: true });
    imgsRow1.push({ id: -1, hidden: true });
    imgsRow2.push({ id: -1, hidden: true });
    imgsRow3.push({ id: -1, hidden: true });
    imgsRow4.push({ id: -1, hidden: true });
    imgsRow5.push({ id: -1, hidden: true });
    imgsRow6.push({ id: -1, hidden: true });
    imgsRow7.push({ id: -1, hidden: true });
    imgsRow8.push({ id: -1, hidden: true });
    imgsRow9.push({ id: -1, hidden: true });

    setRows([
      imgsRow0,
      imgsRow1,
      imgsRow2,
      imgsRow3,
      imgsRow4,
      imgsRow5,
      imgsRow6,
      imgsRow7,
      imgsRow8,
      imgsRow9,
    ]);
  };

  const selectItem = (x, y) => {
    rows[x][y].selected = !rows[x][y].selected;
    setRows([...rows]);
  };

  const countSelected = () => {
    //count the number of items which are selected
    var countSelected = 0;
    rows.forEach((items, x) => {
      items.forEach((item, y) => {
        if (item.selected) {
          countSelected++;
        }
      });
    });
    return countSelected;
  };

  const allSelectedToFalse = () => {
    //make all the items selected to false
    rows.forEach((items, a) => {
      items.forEach((item, b) => {
        if (item.selected) {
          item.selected = false;
          setRows([...rows]);
        }
      });
    });
  };

  const hiddenItem = (x, y) => {
    rows[x][y].hidden = true;
    setRows([...rows]);
  };

  const setStateXY = (x, y) => {
    setXFirst(x);
    setYFirst(y);
  };

  const checkLineX = (y1, y2, x) => {
    var yMax, yMin;
    yMax = Math.max(y1, y2);
    yMin = Math.min(y1, y2);
    for (var i = yMin + 1; i < yMax; i++) {
      if (!rows[x][i].hidden) return false;
    }
    return true;
  };

  const checkLineY = (x1, x2, y) => {
    var xMax, xMin;
    xMax = Math.max(x1, x2);
    xMin = Math.min(x1, x2);
    for (var i = xMin + 1; i < xMax; i++) {
      if (!rows[i][y].hidden) return false;
    }
    return true;
  };

  const checkRectX = (x1, y1, x2, y2) => {
    var yMax, yMin, xMax, xMin;
    yMax = Math.max(y1, y2);
    yMin = Math.min(y1, y2);

    xMax = yMax === y1 ? x1 : x2;
    xMin = yMin === y1 ? x1 : x2;

    if (x1 !== x2) {
      for (var i = yMin + 1; i < yMax; i++) {
        if (
          checkLineX(yMin, i + 1, xMin) &&
          checkLineY(xMin, xMax, i) &&
          checkLineX(i - 1, yMax, xMax)
        ) {
          return i;
        }
      }
      return -1;
    } else return -1;
  };

  const checkRectY = (x1, y1, x2, y2) => {
    var yMax, yMin, xMax, xMin;

    xMax = Math.max(x1, x2);
    xMin = Math.min(x1, x2);

    yMax = xMax === x1 ? y1 : y2;
    yMin = xMin === x1 ? y1 : y2;

    if (y1 !== y2) {
      for (var i = xMin + 1; i < xMax; i++) {
        if (
          checkLineY(xMin, i + 1, yMin) &&
          checkLineX(yMin, yMax, i) &&
          checkLineY(i - 1, xMax, yMax)
        ) {
          return i;
        }
      }
      return -1;
    } else return -1;
  };

  const checkMoreLineX = (x1, y1, x2, y2, type) => {
    var yMax, yMin, xMax, xMin;
    yMax = Math.max(y1, y2);
    yMin = Math.min(y1, y2);

    if (yMax === yMin) {
      xMax = Math.max(x1, x2);
      xMin = Math.min(x1, x2);
    } else {
      xMax = yMax === y1 ? x1 : x2;
      xMin = yMin === y1 ? x1 : x2;
    }

    var y = yMax,
      row = xMin;
    if (type === -1) {
      y = yMin;
      row = xMax;
    }

    if (checkLineX(yMin, yMax, row)) {
      for (var i = y; i <= 17 && i >= 0; i += type) {
        if (
          (rows[row][i].hidden && i === y) ||
          (rows[xMin][i].hidden && rows[xMax][i].hidden) ||
          (yMin === yMax && i === y)
        ) {
          if (checkLineY(xMin, xMax, i)) return i;
        } else {
          break;
        }
      }
      return -1;
    }
    return -1;
  };

  const checkMoreLineY = (x1, y1, x2, y2, type) => {
    var yMax, yMin, xMax, xMin;
    xMax = Math.max(x1, x2);
    xMin = Math.min(x1, x2);

    if (xMax === xMin) {
      yMax = Math.max(y1, y2);
      yMin = Math.min(y1, y2);
    } else {
      yMax = xMax === x1 ? y1 : y2;
      yMin = xMin === x1 ? y1 : y2;
    }

    var x = xMax,
      col = yMin;
    if (type === -1) {
      x = xMin;
      col = yMax;
    }

    if (checkLineY(xMin, xMax, col)) {
      for (var i = x; i <= 9 && i >= 0; i += type) {
        if (
          (rows[i][col].hidden && i === x) ||
          (rows[i][yMin].hidden && rows[i][yMax].hidden) ||
          (xMin === xMax && i === x)
        ) {
          if (checkLineX(yMin, yMax, i)) return i;
        } else {
          break;
        }
      }
      return -1;
    }
    return -1;
  };

  const changeSelection = (x, y) => {
    if (rows[x][y].hidden === true) {
      return;
    } else {
      if (countSelected() >= 2) {
        allSelectedToFalse();
        selectItem(x, y);
        setStateXY(x, y);
      } else {
        if (countSelected() === 1) {
          if (rows[xFirst][yFirst].id === rows[x][y].id) {
            if (x === xFirst && y === yFirst) {
              selectItem(x, y);
            } else {
              if (
                (x === xFirst && checkLineX(y, yFirst, x)) ||
                (y === yFirst && checkLineY(x, xFirst, y)) ||
                checkRectX(x, y, xFirst, yFirst) !== -1 ||
                checkRectY(x, y, xFirst, yFirst) !== -1 ||
                checkMoreLineX(x, y, xFirst, yFirst, 1) !== -1 ||
                checkMoreLineX(x, y, xFirst, yFirst, -1) !== -1 ||
                checkMoreLineY(x, y, xFirst, yFirst, 1) !== -1 ||
                checkMoreLineY(x, y, xFirst, yFirst, -1) !== -1
              ) {
                hiddenItem(xFirst, yFirst);
                hiddenItem(x, y);
                allSelectedToFalse();
              }
            }
          }
        } else {
          if(countSelected() === 0) {
            selectItem(x, y);
            setStateXY(x, y);
        }
        }
      }
    }
  };

  useEffect(() => {
    listItem();
  }, []);

  return (
    <div className="block-list-main">
      <Stack direction="column">
        {rows.map((item, x) => (
          <Stack className="block-list-row" key={x} direction="row">
            {item.map((itemRow, y) => (
              <Block
                key={y}
                item={itemRow}
                changeSelection={() => changeSelection(x, y)}
              />
            ))}
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
