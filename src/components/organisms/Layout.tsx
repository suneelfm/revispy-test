import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../styles/Layout.module.css";
import Icon from "../atoms/Icon";
import { TABS } from "../../data/constants";

export default function Layout() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const user = "User";

  return (
    <Box className={styles.layoutBody}>
      <Grid2 container px={4} height={"90px"} pb={2}>
        <Grid2 size={12} className={styles.helpSection} py={1}>
          <span>Help</span>
          <span>Orders & Returns</span>
          {user && <span>Hi, {user}</span>}
        </Grid2>
        <Grid2 size={{ xs: 6, md: 2 }} className={styles.logo}>
          ECOMMERCE
        </Grid2>
        {isDesktop && (
          <Grid2 size={{ md: 8 }} className={styles.tabs}>
            {TABS.map(({ id, label }) => (
              <span key={id}>{label}</span>
            ))}
          </Grid2>
        )}
        <Grid2 size={{ xs: 6, md: 2 }} className={styles.icons}>
          {!isDesktop && <Icon name="menu" />}
          <Icon name="search" />
          <Icon name="cart" />
        </Grid2>
      </Grid2>
      <Grid2 container className={styles.infoSection}>
        <Icon name="leftArrow" />
        Get 10% off on business sign up
        <Icon name="rightArrow" />
      </Grid2>
      <Grid2 container className={styles.contentDisplay}>
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
          <Outlet />
        </Grid2>
      </Grid2>
    </Box>
  );
}
