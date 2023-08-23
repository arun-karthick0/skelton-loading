import Skeleton from "react-loading-skeleton";

const Card = ({ cards }) => {
  //   console.log(card);
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="skelton_content">
        <div className="left-col">
          <Skeleton circle width={50} height={50} />
        </div>
        <div className="right-col">
          <Skeleton count={5} style={{ marginBottom: "10px" }} />
        </div>
      </div>
    ));
};

export default Card;
