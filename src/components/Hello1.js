function Hello1() {
  return (
    <span>
      <button onClick={Hiall}>Hi all</button>
      <button
        onClick={() => {
          hiYou("Phast");
        }}
      >
        Hi you
      </button>
    </span>
  );
}
const Hiall = () => {
  alert("hello everyone");
};
const hiYou = (name) => {
  alert("hell0 " + name);
};
export default Hello1;
