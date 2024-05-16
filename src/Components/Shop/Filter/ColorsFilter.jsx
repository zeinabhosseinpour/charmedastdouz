import { useParams } from "react-router-dom";

//  data
import { color } from "../../../Components/Shop/Products/productsList2";

//  style

import useSearchParamsFilter from "../../../Hooks/useSearchParamsFilter";

const ColorsFilter = () => {
  //states
  const { slug } = useParams();
  const [updateSearchParams, checkedItems] = useSearchParamsFilter("color");

  // handlers
  const handleColorChecked = (colorLabel) => {
    if (checkedItems.includes(colorLabel)) {
      const otherColors = checkedItems.filter((item) => item !== colorLabel);
      updateSearchParams({ color: otherColors });
    } else {
      updateSearchParams({ color: [...checkedItems, colorLabel] });
    }
  };

  return (
    <section
      style={{
        display: "Flex",
        flexDirection: "column",
        gap: "6px",
        listStyle: "none",
        cursor: "pointer",
      }}
    >
      {color[slug].map((c) => {
        return (
          <div key={c.id}>
            <li
              style={{
                display: "Flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "100%",
                  backgroundColor: c.value,
                  border: checkedItems.includes(c.label)
                    ? "1px solid red"
                    : null,
                  boxShadow: checkedItems.includes(c.label)
                    ? "0 0 1px 3px red"
                    : null,
                }}
                onClick={() => {
                  handleColorChecked(c.label);
                }}
              ></div>
              <span
                style={{
                  color: "rgb(51, 51, 51)",
                  fontWeight: "600",
                }}
              >
                {c.label}
              </span>
              <div
                style={{
                  paddingInline: "5px",
                  textAlign: "center",
                  fontSize: "12px",
                  minwidth: "30px",
                  height: "20px",
                  lineHeight: "18px",
                  borderRadius: "35px",
                  border: checkedItems.includes(c.label)
                    ? "1px solid var(--color-button-primary)"
                    : "1px solid rgba(0, 0, 0, 0.105)",
                  color: checkedItems.includes(c.label)
                    ? "#fff"
                    : "rgb(119, 119, 119)",
                  backgroundColor: checkedItems.includes(c.label)
                    ? "var(--color-button-primary)"
                    : "white",
                }}
              >
                {c.countColor}
              </div>
            </li>
          </div>
        );
      })}
    </section>
  );
};

export default ColorsFilter;
