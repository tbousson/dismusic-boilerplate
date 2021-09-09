import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './App.global.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import Library from './Library';
import Songs from './Songs';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const Hello = () => {
  const libraryComponent = <Library></Library>;
  const songsComponent = <Songs/>;
  const playlistComponent = <Songs/>;
  const bandComponent = <Songs/>;
  const navcontrolComponent = <Library/>;
  const layout =  [
    { w: 4, h: 2, x: 0, y: 0, minW: 4, maxW:8, minH: 2, i: "library", class: 'bg-gray-700 p-2', component: libraryComponent }, 
    { w: 8, h: 2, x: 6, y: 0, minW: 4, maxW:8, minH: 2, i: "songs", class: 'bg-gray-600 p-2' , component: songsComponent }, 
    { w: 6, h: 2.8, x: 0, y: 2, minW: 4, maxW:8, minH: 2, i: "playlist", class: 'bg-gray-600 p-2' , component: playlistComponent }, 
    { w: 6, h: 2.8, x: 6, y: 2, minW: 4, maxW:8, minH: 2, i: "band", class: 'bg-gray-600 p-2' , component: bandComponent }, 
    // { w: 12, h: 0.5, x: 3, y: 3, i: "navcontrol", class: 'bg-green-300 p-2' , component: navcontrolComponent }, 
]

return (
  <div className='flex flex-col bg-gray-800 h-screen justify-between'>
    <main>
  <ResponsiveReactGridLayout layout={layout} className=""
  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
  cols={{lg: 12, md: 12, sm: 2, xs: 2, xxs: 2}}>

      {
      layout.map((data, index) => (
        <div key={data.i} data-grid={data} className={data.class}>{data.component}</div> ))
      }
</ResponsiveReactGridLayout>
</main>
<footer className="h-28 bg-blue-900 p-2">
  <Library></Library>
</footer>
</div>
);
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
