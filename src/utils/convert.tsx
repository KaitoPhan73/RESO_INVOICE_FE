import React from "react";

interface Item {
  ordinalNumber: number;
  code: string;
  name: string;
  quantity: number;
  property: string;
  unit: string;
  price: number;
  discountRate: number;
  discountAmount: number;
  amountWithoutDiscount: number;
  amount: number;
  taxAmount: number;
  amountAfterTax: number;
  tax: string;
}

interface ItemDisplayProps {
  item: Item;
}

const splitStringToArray = (str: string): string[] => {
  return str.split("");
};

// Hàm convert để chuyển đổi chuỗi thành các thẻ <span>
const convert = (text: string): JSX.Element[] => {
  return splitStringToArray(text).map((char, index) => (
    <span key={index} className="fc3 sc0">
      {char}
    </span>
  ));
};

export const ItemDisplay: React.FC<ItemDisplayProps> = ({ item }) => {
  return (
    <div>
      <div className="t m0 x30 h4 y19 ff2 fs1 fc1 sc0 ls0 ws0">
        <span className="fc3 sc0">
          {convert(item.ordinalNumber.toString())}
        </span>
        <span className="_ 19"> </span>
        {convert(item.name)}
        <span className="fc3 sc0"> </span>
        <span className="_ _1a" />
        {convert(item.unit)}
        <span className="_ _1b"> </span>
        {convert(item.quantity.toString())}
        <span className="_ _1c"> </span>
        {convert(item.price.toString())}
        <span className="_ _1d"> </span>
        {convert((item.amount * item.quantity).toString())}
      </div>
    </div>
  );
};
