import React, {FC} from 'react';

import {NavBarTypes} from './NavBar.types';
import {PageToolbar, ToolbarButton, ToolbarButtonRow, useTheme} from '@grafana/ui';
import {getStyles} from './NavBar.styles';

import pmmLogo from "../../img/percona-logo.svg";

export const NavBar: FC<NavBarTypes> = () => {

    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <div className={styles.componentStyle}>

            <PageToolbar
                pageIcon="apps"
                title="Percona monitoring and management"
                titleHref=""
                parentHref=""
            >
                <ToolbarButton icon="signin">Percona sign in</ToolbarButton>
                <ToolbarButton icon="bell"/>
                <ToolbarButton icon="message"/>
                <ToolbarButton icon="question-circle"/>
            </PageToolbar>

            <br/>

            <nav className={styles.toolbar}>
                <div className={styles.leftWrapper}>
                    <div className={styles.pageIcon}>
                        <div className={styles.pmmIconHolder}>
                            <img className={styles.pmmIcon} src={pmmLogo}/>
                        </div>
                    </div>
                    <nav aria-label="Search links" className={styles.navElement}>
                        <div className={styles.titleWrapper}>
                            <h1 className={styles.h1Styles}>
                                <div className={styles.titleText}>Percona monitoring and management</div>
                            </h1>
                        </div>
                    </nav>
                </div>
                <ToolbarButtonRow alignment="right">
                    <ToolbarButton icon="signin">Percona sign in</ToolbarButton>
                    <ToolbarButton icon="bell"/>
                    <ToolbarButton icon="message"/>
                    <ToolbarButton icon="question-circle"/>
                </ToolbarButtonRow>
            </nav>

        </div>
    );
};
