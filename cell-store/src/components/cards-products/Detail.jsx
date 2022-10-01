import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailId, resetState } from "../../redux/actions/productActions";
import { useEffect } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailId(id));

    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  const myProduct = useSelector((state) => state.detail);

  return (
    <div>
      <div className={styles.nav}>
        <li >
          <Link className={styles.link} to="/">BACK TO HOME</Link>
        </li>
      </div>
      <div className={styles.container}>
        <div className={styles.caja}>
          {myProduct.err ? (
            <div className={styles.error404}>
              <Link to="/">
                <img
                  src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-404-error-or-not-found-button-icon--in-gray-background-png-image_4962266.jpg"
                  alt="Not found"
                />
              </Link>
            </div>
          ) : myProduct ? (
            <div className={styles.cajaDividida}>
              <div className={styles.cardImage}>
                <img src={myProduct.image} alt="not found" />
              </div>
              <div className={styles.cardDetail}>
                
                <h3 className={styles.titleone}>{myProduct.name}</h3>
                <p className={styles.price}>
                  $
                  {myProduct.price}
                </p>
                <p className={styles.letter}>
                  <strong>Description : </strong>
                  {myProduct.description}
                </p>
              </div>
              <div className={styles.buy}>
                <p className={styles.letter}>
                  <strong>stock : </strong>
                  {myProduct.stock} unidades.
                </p>
                <div className={styles.btnBuy}>
                  Comprar ahora
                </div>
                <div className={styles.btnCar}>
                  Agregar al carrito
                </div>
              </div>
            </div>
          ) : (
            <img
              src="https://aquamarineexotic.com/adminpanel/assets/images/page-loading-old.gif"
              alt="loading"
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Detail;

/* /products */
