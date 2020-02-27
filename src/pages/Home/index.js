import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=1088x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$399,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=1088x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$399,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=1088x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$399,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-fitbounce-masculino/06/NQQ-2765-006/NQQ-2765-006_zoom3.jpg??ims=1088x"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$399,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
