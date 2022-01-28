# Installation

## Typora (Markdown or .md files)

[Link](https://typora.io/#windows)

## Python

### Install Anaconda on Windows

[Link](https://docs.anaconda.com/anaconda/install/windows/)

### Install Anaconda on Linux

```bash

curl -O https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh
bash Anaconda3-2019.03-Linux-x86_64.sh
source ~/.bashrc
conda list
```

### Check Anaconda

#### 1. Check conda is installed and in your PATH

1. Open Anaconda prompt
2. Enter `conda -V` into the terminal command line and press enter.
3. If conda is installed you should see somehting like the following.

```bash
$ conda -V
conda 3.7.0
```

#### 2.  Check conda is up to date

1. In the terminal client enter

```bash
conda update conda
```

#### 3. Create a virtual environment for your project

> *A virtual environment is a named, isolated, working copy of Python that that maintains its own files, directories, and paths so that you can work with specific versions of libraries or Python itself without affecting other Python projects. Virtual environmets make it easy to cleanly separate different projects and avoid problems with different dependencies and version requiremetns across components. The conda command is the preferred interface for managing intstallations and virtual environments with the Anaconda Python distribution. If you have a vanilla Python installation or other Python distribution see virtualenv*

1. In the terminal client enter the following where *yourenvname* is the name you want to call your environment, and replace *x.x* with the Python version you wish to use. (To see a list of available python versions first, type `conda search "^python$"` and press enter.)

   ```bash
   conda create -n yourenvname python=x.x anaconda
   ```

2. Press `y` to proceed. This will install the Python version and all the associated anaconda packaged libraries at “path_to_your_anaconda_location/anaconda/envs/yourenvname”

#### 4. Activate your virtual environment

1. To activate or switch into your virtual environment, simply type the following where *yourenvname* is the name you gave to your environement at creation.

   ```bash
   conda activate yourenvname
   ```

2. Activating a conda environment modifies the PATH and shell variables to point to the specific isolated Python set-up you created. The command prompt will change to indicate which conda environemnt you are currently in by prepending `(yourenvname)`. To see a list of all your environments, use the command `conda info -e`.

#### 5. Install additional Python packages to a virtual environment

1. To install additional packages only to your virtual environment, enter the following command where *yourenvname* is the name of your environemnt, and *[package]* is the name of the package you wish to install. If you do not specify the environment name, which in this example is done by `--name myenv`, the package installs into the current environment:*.

   ```bash
   conda install --name yourenvname [package]
   conda install [package]
   ```

#### 6. Deactivate your virtual environment

1. To end a session in the current environment, enter the following. There is no need to specify the envname - which ever is currently active will be deactivated, and the PATH and shell variables will be returned to normal.

   ```bash
   conda deactivate
   ```

   

#### 7. Delete a no longer needed virtual environment

1. To delete a conda environment, enter the following, where *yourenvname* is the name of the environment you wish to delete.

   ```bash
   conda remove -n yourenvname -all
   ```

#### 8. Publish 


```bash
#Login
conda install anaconda-client
anaconda login
anaconda logout
conda config --set anaconda_upload yes

conda config --add channels conda-forge meracan

# New project
conda skeleton pypi {name} # name of package

conda-build --user MERACAN --token {token} {name}

#Optional
conda-build --python 3.8 {...}

# Optional convert to all platform
conda convert --platform all conda convert --platform all /home/ec2-user/anaconda3/conda-bld/linux-64/click-7.1.1-py37_0.tar.bz2 -o build/
```
In meta.yaml
For skeleton: check https://github.com/conda-forge/staged-recipes/blob/master/recipes/example/meta.yaml
```
build:
   noarch: python

```
