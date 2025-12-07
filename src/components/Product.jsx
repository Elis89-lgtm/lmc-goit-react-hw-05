export default function Product({ name, imgUrl, price }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Ceny:{price}credits</p>
    </>
  );
}
