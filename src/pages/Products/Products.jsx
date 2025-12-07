import React from "react";
import ProductList from "../../components/ProductList";
// Підключаю компонент, який буде показувати список товарів

import { getProducts } from "../../fakeApi";
// Підключаю функцію, яка повертає список товарів із фейкової бази

import { useSearchParams } from "react-router-dom";
// Підключаю можливість читати й змінювати параметри в адресному рядку сторінки

import { SearchBox } from "../../components/SearchBox";
// Підключаю компонент для поля пошуку

export default function Products() {
  // Створюю компонент сторінки з товарами

  const products = getProducts();
  // Отримую всі товари, які доступні.

  const [searchParams, setSearchParams] = useSearchParams();
  // Беру поточні параметри з адреси і функцію, щоб їх змінювати.

  const productName = searchParams.get("name") ?? "";
  //   const productName: Объявляет константу с именем productName.
  // searchParams: это объект URLSearchParams, содержащий параметры из URL .
  // .get('name'): Метод, который извлекает значение параметра с именем name из searchParams.
  // ?? '': Оператор нулевого слияния. Он проверяет, является ли значение, возвращаемое searchParams.get('name'), nullили undefined. Если да, то присваивает productNameзначение пустой строки ''.
  // Читаю з адреси значення параметра name.
  // Якщо там нічого немає — беру порожній текст

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  // Этот код JavaScript создает новую переменнуюvisibleProducts. [1]
  // Он выполняет следующие действия:
  // Берет существующий массив products. [1]
  // Применяет способ .filter()к этому массиву. [1] Этот метод создает новый массив, содержащий только те элементы (в данном случае, отдельные product), которые соответствуют заданному условию. [1]
  // Условие фильтрации : Для каждого продукта он проверяет, включает ли его имя ( product.name), переведенное в нижний регистр ( .toLowerCase()), искомую строку productName(также переведенную в нижний регистр). [1] Метод .includes()возвращает true, если подстрока найдена, и falseв противном случае. [1]
  //!======на темі обєкт місцезнаходження прибираємо=================================
  // const updateSearchParams = (key, value) => {
  //   // Products.jsx — там updateSearchParams потрібен для фільтрації товарів
  //   // 1. Обновляем определенный ключ т.е параметры в адресе
  //   const updatedParams = new URLSearchParams(searchParams);
  //   // 2. Копируем существующие параметры,чтобы их изменить
  //   if (value !== "") {
  //     updatedParams.set(key, value);
  //   } else {
  //     updatedParams.delete(key);
  //     //       Якщо значення непорожнє — додаю його як параметр.
  //     // Якщо порожнє — видаляю цей параметр з адреси.
  //   }
  //   setSearchParams(updatedParams);
  //   // 3. Применяем изменения в URL,Оновлюю адресу в браузері новими параметрами
  // };

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    // Повертаю розмітку для відображення на сторінці.
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      {/* // Показую поле пошуку. // Передаю в нього текст, який зараз є в адресі,
      // і передаю функцію, яка при кожному введенні оновлюватиме ?name= в
      адресному рядку. */}
      <ProductList products={visibleProducts} />
      {/* Показую список товарів, відфільтрованих за введеним словом */}
    </main>
  );
}
