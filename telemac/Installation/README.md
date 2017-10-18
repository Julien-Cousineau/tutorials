# TELEMAC Installation
## Windows
These instructions will guide you through the TELEMAC installation. It is strongly recommended that you follow these procedures step-by-step.
The openTELEMAC website does provide an installation procedure, however it is recommended to use this procedure. 
(http://www.opentelemac.org/index.php/documentation/installation13/74-installation-procedure-with-python
### Contents
The USB  contains a ZIP file containing the following software:
* BlueKenue
* Python 2.7
* Python Libraries (numpy, scipy, matplotlib)
* TurtoiseSVN
* FORTRAN compilte (gfortran)
* MPICH2
 
### System Requirements
* Windows 7
* Administrators privilege
* Internet connection

### System Environment Variables
The TELEMAC installation requires to create and edit Windows system environment variables.
Windows environment variables can be created and edited by pressing the Windows key or Start, entering “environment” in the search field and selecting the “Edit the System Environment Variables”. The PATH variable will be often edited during the installation procedures. PATH is an environment variable specifying a set of directories where executable programs are located.
NOTE: If any system environment variable are created or edited, close all opened command prompt window since they will not contain the new or edited variables.

### Paths
It is recommended to avoid using the space character in folders and in files during the installation process. The space characters often leads to errors (e.g c:\Program Files\).

### System Checks
The TELEMAC installation requires to install Python, GFortran and MPICH2.
If Python, GFortran or MPICH2 is already installed, it is recommend to uninstall them to avoid any problems during the TELEMAC installation. If this is not possible, a few checks are necessary.
#### Check version of Python and PATH
* Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “python” and press Enter. If Windows is not able to launch Python, Python is likely not installed on your computer. If Python launches, please check the version of Python (e.g. 2.7.10, 3.4.4) and the architecture (e.g win32 or win64)  
* Telemac requires python 2.7 with win32. If another version is installed, it is recommended to remove the folder in the PATH variable that points to the “python.exe” executable.
* If Python is installed with the correct version and architecture, please locate the Python executable for reference (e.g. C:\Python27\python.exe)
#### Check version of gfortran
* Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “gfortran -v”. If Windows is not able to launch gfortran, gfortran is likely not installed on your computer. If installed, it is highly recommended to use the gfortran provided by the installation procedure and it is recommended to remove the folder in the PATH variable that points to the “gfortran.exe” executable.
####	Check version of MPICH2
* Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “mpiexec”. If Windows is not able to launch mpiexec, mpiexec is likely not installed on your computer. If it is installed, enter “smpd -version” in the command prompt to check the version. Version should be 1.4.1p1.
* If installed, please make sure MPICH2 is not installed under “c:\Program Files\” since it has a space character in the path.
#### Software Installation
* Create a new directory (c:\opentelemac\installation)
* Copy the ZIP file from the USB drive to “c:\opentelemac\installation”
* Extract the ZIP file in this directory

### BlueKenue Installation
1.	Install BlueKenue (“BlueKenue64Installer3.4.22.msi”) and follow their instructions. Note: It does not matter where this is installed. The 32bit is also available. Please contact the author.

### Python Installation
2.	Install Python (“python-2.7.11.msi”) in “c:\Python27\” and follow their instructions.
3.	The directory “c:\Python27” and “C:\Python27\Scripts” should be in the PATH. If not, add it.
4.	Installation Check: Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “python”. Windows should execute Python.

### Python Libraries Installation
1.	Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter).
2.	In the command-prompt, enter “cd c:\opentelemac\installation\” and press Enter.
3.	In the command-prompt, enter “pip install numpy-1.9.3+mkl-cp27-none-win32.whl” and press Enter.
4.	In the command-prompt, enter “pip install matplotlib-1.4.3-cp27-none-win32.whl” and press Enter.
5.	In the command-prompt, enter “pip install scipy-0.16.0-cp27-none-win32.whl” and press Enter.
6.	Check installation: Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “python”. In the command-prompt, enter “import numpy” and press Enter. In the command-prompt, enter “import scipy” and press Enter. In the command-prompt, enter “import matplotlib” and press Enter. No errors should be found. Close the command window. 

### TurtoiseSVN Installation
1.	Install TortoiseSVN (TortoiseSVN-1.9.2.26806-x64-svn-1.9.2.msi) . Note: It does not matter where this is installed. The 32bit is also online (https://tortoisesvn.net/downloads.html) if necessary.

### MPICH2 Installation
1.	Install MPICH2 (mpich2-1.4.1p1-win-x86-64.msi) in “c:\MPICH2\” and follow their instructions. Select the option where MPICH2 will be installed for anyone who uses the computer.
2.	Make sure the “c:\MPICH2\bin” directory is in the PATH variable.
3.	Open a command prompt with admin privileges (press Windows key or Start, enter “cmd”, and right-click cmd.exe icon, and select “Run as Administrator”), and enter “smpd -install”
4.	In the command-prompt, enter “smpd –status”. This will indicate if the smpd service for the mpi is running on your computer.
5.	Close the admin command-prompt window
6.	Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “mpiexeccd  –register” and press Enter. Press enter to your account name and enter your password. 
7.	Installation Check: Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “cd c:\MPICH2\examples\”. In the command prompt, enter
“mpiexec –n 2  cpi”. This will run the cpi.exe executable with 2 processors.

### GFortran Installation
1.	Copy the mingw64 directory directly to the “c:\”, hence “c:\mingw64”.
2.	Make sure the “c:\mingw64\bin” directory is in the PATH variable.
3.	Installation Check: Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “gfortran -v”. This will execute gfortran and should provide the version of the fortran compiler.

### Metis Libraries
1.	Copy the metis directory directly to the “c:\opentelemac”, hence “c:\opentelemac\metis”.

### Download TELEMAC
1.	Open a windows-explorer and right-click the “c:\opentelemac\” directory and select “SVN Checkout…”.
2.	In the “URL of repository”, enter http://svn.opentelemac.org/svn/opentelemac/tags/v7p0r1/
3.	In the “Checkout directory”, enter “c:\opentelemac\v7p0r1\
4.	Username: ot-svn-public
5.	Password: telemac1*
6.	SVN information (http://www.opentelemac.org/index.php/sources-svn)
7.	It should take around 15min to download (1 GB).

### Compile TELEMAC
1.	Copy the “win7.cfg” directly to the c:\opentelemac”. This file is the configuration file for TELEMAC. All path in the file should be checked.
2.	Make sure the “c:\opentelemac\ v7p0r1\scripts\python27” directory is in the PATH variable.
3.	Create a new Environment Variable called  “SYSTELCFG” with a value equal to “c:\opentelemac\win7.cfg”
4.	Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “config.py”.
5.	In the command-prompt, enter “compileTELEMAC.py”

### TEST TELEMAC
1.	Open a command prompt (press Windows key or Start, enter “cmd”, and press Enter), and enter “cd C:\opentelemac\v7p0r1\examples\telemac2d\bj78”.
2.	(Scalar Mode) In the command-prompt, enter “telemac2d.py t2d_bj78.cas”. It should say “My work is done” at the end of the simulation.
3.	(Parallel Mode) In the command-prompt, enter “telemac2d.py –c wing64mpi --ncsize 2 t2d_bj78.cas”. It should say “My work is done” at the end of the simulation.
