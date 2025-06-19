import { Heatmap } from '../Charts/Heatmap';
import { Histogram } from '../Charts/Histogram';
import { LineComponent } from '../Charts/Line';
import { OldLine } from '../Charts/LineOld';
import { Polar } from '../Charts/Polar';
import { ScatterChart } from '../Charts/ScatterChart';

type LinkType = {
  link: string;
  component: React.ComponentType;
};

export type linksType = {
  [key: string]: LinkType;
};

export const links: linksType = {
  line: { link: '/', component: LineComponent },
  oldLine: { link: '/old-chart', component: OldLine },
  scatter: { link: '/scatter-chart', component: ScatterChart },
  histogram: { link: '/histogram-chart', component: Histogram },
  polar: { link: '/polar-chart', component: Polar },
  heatmap: { link: '/heatmap-chart', component: Heatmap },
};
