import { Checkbox, FormControlLabel, Grid2, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Categories.module.css";
import Icon from "../atoms/Icon";
import { useCategory, useSaveInterest } from "../../serviceQuery/categoryQuery";
import { useQueryClient } from "@tanstack/react-query";

export default function Categories() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCategory(page);

  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useSaveInterest();

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    }
  }, [isSuccess]);

  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        Please mark your interests!
      </Grid2>
      <Grid2 size={12} className={styles.subTitle}>
        We will keep you notified.
      </Grid2>
      <Grid2 size={12} className={styles.interestsTitle}>
        My saved interests!
      </Grid2>
      {data?.data?.categories?.map(
        ({
          _id,
          name,
          isInterested,
        }: {
          _id: string;
          name: string;
          isInterested: boolean;
        }) => (
          <FormControlLabel
            key={_id}
            label={name}
            checked={isInterested}
            onChange={(e, checked) => mutate({ _id, isInterested: checked })}
            sx={{
              paddingLeft: "16px",
              width: "100%",
              "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
                fontSize: "16px !important",
              },
            }}
            control={
              <Checkbox
                checkedIcon={
                  <span className={`${styles.checkIcon} ${styles.checkedIcon}`}>
                    <Icon name="check" className={styles.tickIcon} />
                  </span>
                }
                icon={
                  <span
                    className={`${styles.checkIcon} ${styles.unCheckedIcon}`}
                  ></span>
                }
              />
            }
          />
        )
      )}
      {isLoading && <span>Loading Categories....</span>}
      <Pagination
        className={styles.pagination}
        count={data?.data?.totalPages}
        page={page}
        onChange={(e, page) => setPage(page)}
        showFirstButton
        showLastButton
      />
    </Grid2>
  );
}
