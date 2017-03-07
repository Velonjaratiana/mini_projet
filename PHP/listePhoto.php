<?php
  $directory = '../dist/img/photo';	
  $src="dist/img/photo/"	;
  $iter = new DirectoryIterator( $directory );
  $data = [];
  foreach($iter as $file ) {
      if ( !$file->isDot() ) {
          $data[]=array("nom"=>$file->getFilename(),"src"=>$src.''.$file->getFilename());
      }
  }	
  echo json_encode($data);
?>