import css from './styles.module.css';
import {
  processOperation,
  cancelOperation,
} from './functions';

import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loading, slideTopAnimation, ToastError } from '../components';
import GlobalProvider, { GlobalContext } from '../context';

function PosSuccess({ opUrl }: { opUrl: string }) {
  const { state, setState } = useContext(GlobalContext);

  return (
    <motion.div className={css.successWrapper} {...slideTopAnimation}>
      <div className={css.successContainer}>
        <h1 className={css.posTitle}>¡Pago iniciado!</h1>
        <h3 className={css.posTitle}>
          Continúe desde el punto de venta y espere a ser redirigido
        </h3>
        <button
          className={css.posButton}
          onClick={() => {
            cancelOperation(state.pos, opUrl);
            setState({ pos: false, result: null });
          }}
        >
          Elegir otro POS
        </button>
      </div>
    </motion.div>
  );
}

function PosActions({ opUrl }: any) {
  const { state, setState } = useContext(GlobalContext);

  return (
    <div className={css.posActions}>
      <button
        className={`${css.posButton} ${state.loading && css.posButtonDisabled}`}
        onClick={async () => {
          if (state.loading) return;

          setState({ loading: true });
          let res: any = null;

          try {
            res = await processOperation(state.pos, opUrl);
            console.log('response: ' + res)
            if (!res?.result) throw new Error(res?.message);
          } catch (error) {
            console.log(error);
          }

          setState({ result: !!res?.result, loading: false });
        }}
      >
        Continuar al pago
      </button>
    </div>
  );
}

function PosList({ list }: any) {
  const { state, setState } = useContext(GlobalContext);

  return (
    <>
      <h3 className={css.posTitle}>
        {list.length
          ? 'Seleccione un punto de venta'
          : 'No se encontraron terminales habilitadas'}
      </h3>
      <div className={css.posList}>
        {list.map((pos: any) => (
          <div
            id={pos.uid}
            key={pos.uid}
            onClick={(e) => setState({ pos: e.currentTarget.id })}
            className={`${css.pos} ${
              state.pos == pos.uid ? css.posSelected : ''
            }`}
          >
            <h3>{pos.name}</h3>
            <p className="testingStyle">{pos.description}</p>
            <small>Referencia: {pos.reference}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export default function PosCheckout({ posList, opUrl, handleResetTransaction }: any) {
  const [state, setState] = useState({
    pos: '',
    loading: false,
    result: null
  });

  console.log('state' + state.result);

  handleResetTransaction(() => state.pos && cancelOperation(state.pos, opUrl));

  return (
    <GlobalProvider state={state} setState={setState}>
      <div className={css.posWrapper}>
        <small className={css.smallLegend}>Con tecnología de Mobbex</small>
        <PosList list={posList} />
        <PosActions opUrl={opUrl} />
        <AnimatePresence>
          {state.loading && <Loading />}
          {state.result && <PosSuccess opUrl={opUrl} />}
        </AnimatePresence>
        {state.result === false && (
          <ToastError 
            key={new Date().getTime()} 
            message="Error al procesar la solicitud, intente nuevamente"
          />
        )}
      </div>
    </GlobalProvider>
  );
}