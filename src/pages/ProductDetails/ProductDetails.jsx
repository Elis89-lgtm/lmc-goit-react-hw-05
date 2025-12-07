import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getProductById } from "../../fakeApi";
import { BackLink } from "../../components/BackLink";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state ?? "/products";
  //   Використати location.state, якщо він існує; інакше перейти на "/products".

  // Або ще коротше:

  // Повертаємось туди, звідки прийшли, а якщо не знаємо — у /products.

  return (
    <main>
      <BackLink to={backLinkHref}>Back to produkts</BackLink>
      {/* Компонент BackLink створює посилання, яке веде на маршрут, що міститься у змінній backLinkHref. Текст посилання — “Back to products”.

✔ Або ще коротше:

Створює кнопку/лінк для повернення назад за шляхом backLinkHref. */}
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
}
