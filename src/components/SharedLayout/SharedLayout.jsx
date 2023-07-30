import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;


// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom'; // додаємо компонент для рендерингу дочірніх компонентів
// import { Loader  } from '../Loader/Loader'; // додаємо індикатор завантаження


// const SharedLayout = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Suspense fallback={<Loader />}>
//           <Outlet />
//         </Suspense>
//       </main>
//     </div>
//   );
// };
// export default SharedLayout;
