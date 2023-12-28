NEXUSWEBPATH=packages/code-nexus-web/public/assets/docs
OGDOCS=packages/code-nexus/src/components

rm -rf ${NEXUSWEBPATH}/
if [ ! -d $NEXUSWEBPATH ]
then
  echo "Creating docs path $NEXUSWEBPATH"
  mkdir $NEXUSWEBPATH
  if [ ! -d ${NEXUSWEBPATH}/code-nexus ]
  then
    echo "Creating ${NEXUSWEBPATH}/code-nexus directory"
    mkdir ${NEXUSWEBPATH}/code-nexus
    cp ${OGDOCS}/code-nexus/readme.md ${NEXUSWEBPATH}/code-nexus/
  fi
  if [ ! -d ${NEXUSWEBPATH}/nexus-panel ]
  then
    echo "Creating ${NEXUSWEBPATH}/nexus-panel directory"
    mkdir ${NEXUSWEBPATH}/nexus-panel
    cp ${OGDOCS}/nexus-panel/readme.md ${NEXUSWEBPATH}/nexus-panel/
  fi
fi