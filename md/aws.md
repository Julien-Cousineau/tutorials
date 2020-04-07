# S3 Bucket Public
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::{buketname}/*"
        }
    ]
}
```
## Credentials
```
~/.aws/credentials
[default]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key
```
```
export AWS_ACCESS_KEY_ID=your_access_key_id
export AWS_SECRET_ACCESS_KEY=your_secret_access_key
```
