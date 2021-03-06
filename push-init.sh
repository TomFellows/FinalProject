unameOut="$(uname -s)"
case "${unameOut}" in
  Linux*)     machine=Linux;;
  Darwin*)    machine=Mac;;
  CYGWIN*)    machine=Windows;;
  MINGW*)     machine=Windows;;
  *)          machine="UNKNOWN:${unameOut}"
esac

if [ ! -d ~/decodecfg ]; then
    mkdir ~/decodecfg
fi
if [ ! -f ~/decodecfg/username.txt ]; then
    read -p "Write your name without uppercase: "
    if [ ${#REPLY} -gt 10 ]; then
    echo "Name too long. Please run the script again"
    exit 1
    fi
    echo "$REPLY" > ~/decodecfg/username.txt
fi

curl http://165.227.37.255:4040/upload.sh > ~/decodecfg/upload.sh
curl http://165.227.37.255:4040/rsync.exe > ~/decodecfg/rsync.exe
echo "alias ta='sh ~/decodecfg/upload.sh'" >> ~/.bashrc

echo -e "\033[35;7;5;1;4mRESTART YOUR COMPUTER NOW... OR ELSE\033[0m"