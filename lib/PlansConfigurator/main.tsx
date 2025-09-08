import { createRoot } from 'react-dom/client';

import PlansConfigurator from './PlansConfigurator';

const div = document.createElement("div")
document.body.appendChild(div);
createRoot(div).render(<PlansConfigurator sourceUrl={""}/>)