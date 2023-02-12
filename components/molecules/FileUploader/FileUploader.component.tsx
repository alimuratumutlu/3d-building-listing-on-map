import React from "react";
import { Button, Input, Typography } from "components";
import styles from "styles/FileUploader.module.css";

export default function FileUploader() {
  return (
    <div className={styles.container}>
      <Typography variant="h6">File Uploader</Typography>
      <Input type="file" />
      <Button label="Upload GeoJSON" />
    </div>
  );
}
