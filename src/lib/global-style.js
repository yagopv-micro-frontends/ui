import { createGlobalStyle } from 'styled-components';
import { fontFamily, color } from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Press+Start+2P&family=Raleway:wght@400;700&display=swap');
  
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 100%;
  }
 
  body, #root {
    font-family: ${fontFamily('primary')};
    height: 100%;
    background: ${color('dark')};
    color: ${color('primary')};
    line-height: 1.3em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .gutter-horizontal {
    cursor: ew-resize;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${color('primary')};
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: ${color('dark')};
  }
  ::-webkit-scrollbar-thumb {
    background: ${color('primary')};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${color('bright')};
  }
`;
