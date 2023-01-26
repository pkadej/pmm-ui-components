import {css} from '@emotion/css';
import {GrafanaTheme} from '@grafana/data';
import {stylesFactory} from '@grafana/ui';

export const getStyles = stylesFactory((theme: GrafanaTheme) => ({
    componentStyle: css`
        width: 100%;
        color: white;
    `,
    toolbar: css`
        align-items: center;
        background: #111217;
        display: flex;
        gap: ${theme.spacing.sm};
        justify-content: space-between;
        padding: ${theme.spacing.sm};
    `,
    pmmIconHolder: css`
        display: inline-block;
        line-height: 0;    
    `,
    pmmIcon: css`
        height: 25px;
        width: 25px;
    `,
    leftWrapper: css`
        display: flex;
        flex-wrap: nowrap;
        max-width: 70%;
    `,
    navElement: css`
        display: flex;
        align-items: center;
        min-width: 0;
    `,
    titleWrapper: css`
        display: flex;
        margin: 0;
        min-width: 0;
    `,
    pageIcon: css`
        display: flex;
        padding-right: 15px;
        align-items: center;
    `,
    h1Styles: css`
        margin: 0;
        line-height: inherit;
        flex-grow: 1;
        min-width: 0;
    `,
    titleText: css`
        display: flex;
        font-size: ${theme.typography.size.lg};
        margin: 0;
        max-width: 300px;
        border-radius: 2px;
    `,
}));
