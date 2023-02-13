import React from "react";
import styles from "styles/FileUploader.module.css";

// Components
import { Button, Input, Typography } from "components";

// Hooks
import useGeojson from "hooks/useGeojson";

// Constants
import { UPLOAD_FILE_LABEL } from "constants/Titles";

export default function FileUploader() {
  const { uploadFile } = useGeojson();

  return (
    <div className={styles.container}>
      <Typography variant="h6">{UPLOAD_FILE_LABEL}</Typography>
      <Input type="file" onChange={uploadFile} />
      {/* <Button label={label} /> */}
    </div>
  );
}
