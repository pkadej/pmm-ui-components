import { PanelPlugin } from '@grafana/data';
import { HelpCenterPanel } from './HelpCenterPanel';

export const plugin = new PanelPlugin<{}, {}>(HelpCenterPanel);
