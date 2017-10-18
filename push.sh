#!/bin/sh
#$ -N $2
commit=$1
git add . 
git commit -m $commit
git push -u origin master