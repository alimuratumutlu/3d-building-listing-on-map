import React from "react";
import styles from "styles/FileUploader.module.css";

// Components
import { Button, Input, Typography } from "components";

// Hooks
import useGeojson from "hooks/useGeojson";

interface FileUploaderProps {
  label: string;
}

export default function FileUploader({ label }: FileUploaderProps) {
  const { uploadFile } = useGeojson();

  return (
    <div className={styles.container}>
      <Typography variant="h6">File Uploader</Typography>
      <Input type="file" onChange={uploadFile} />
      <Button label={label} />
    </div>
  );
}
