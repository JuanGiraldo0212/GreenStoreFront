import React from 'react';
import S3FileUpload from 'react-s3'

export default () => {

    const config = {
        bucketName: 'greenstoreclient-images',
        dirName: '', /* optional */
        region: 'us-east-1',
        accessKeyId: 'AKIAZ5T37QTGMAZRG4PP',
        secretAccessKey: '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'
    }

    const uploadFileToS3 = (event) =>{

        S3FileUpload.uploadFile(event.target.files[0], config)
            .then((data) =>{
                console.log(data.location)
            }).catch((err) => {
                alert(err)
            })

    }

    return(
        <>
        <input type="file" onChange={uploadFileToS3}>Upload File</input>
        </>
    )
}