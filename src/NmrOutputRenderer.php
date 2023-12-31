<?php

class NmrOutputRenderer extends AbstractOutputRenderer {

	/**
	 * @param string $SourceFileURL
	 * @param string $FileTitle
     * @param string $FileName
     * @param array $params
	 */
	public function __construct( $SourceFileURL, $FileTitle, $FileName, $params ) {
		parent::__construct( $SourceFileURL, $FileTitle, $FileName, $params, 'NMRium', 'nmrium_logo.svg', 'jcampURL');
	}

}