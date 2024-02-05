import { useShoppingCart } from '../../context/ShoppingCartContext';
import {
  Card,
  Image,
  CardBody,
  InfoCard,
  ProductName,
  ProductPrice,
  AddProduct,
} from './style';

interface CardProdutProps {
  id: number;
  name: string;
  price: string;
}

const CardProdut = ({ id, name, price }: CardProdutProps) => {
  const { increaseCartQuatity } = useShoppingCart();

  return (
    <Card>
      <Image src={`/product-images/Produto${id}-img.png`} />
      <CardBody>
        <InfoCard>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <strong>R$ </strong>
            {price}
          </ProductPrice>
        </InfoCard>
        <AddProduct
          src="/icons/Botao-de-mais.svg"
          alt=""
          onClick={() => increaseCartQuatity(id)}
        />
      </CardBody>
    </Card>
  );
};

export default CardProdut;
