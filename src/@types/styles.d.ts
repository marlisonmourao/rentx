import styled from "styled-components/native";
import theme from "src/theme/theme";

declare module "styled-components" {
    type themeType = typeof theme;

    export interface DefaultTheme  extends themeType {}
}