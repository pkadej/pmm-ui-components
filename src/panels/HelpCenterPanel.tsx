import React, {
  FC, useState
} from 'react';
import { Button, Drawer } from '@grafana/ui'

export const HelpCenterPanel: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open drawer</Button>
              {isOpen && (
                <Drawer
                    title="title"
                    subtitle="subtitle"
                    onClose={() => setIsOpen(false)}>
                <div style={{ padding: '10px' }}>
                  <ul>
                     <li>this</li>
                     <li>is</li>
                     <li>a</li>
                     <li>list</li>
                     <li>of</li>
                     <li>menu</li>
                     <li>items</li>
                   </ul>
                 </div>
               </Drawer>
            )}
      </>
  );
};
