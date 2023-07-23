import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Title.module.css';

export default function Title() {
  return (

        <Col id={'titleSection'} globalStyles={'bo cx-center cy-center'} localStyles={styles.titleSection} >
          <Col  globalStyles={'bo w-9'}  >
            <Col  globalStyles={'bo w-9 g-5'}  >
              <Box  globalStyles={'bo '} localStyles={styles.title} >
                Development
              </Box>
              <Link href={'/contact'} className='txt-link'>
                <Row  globalStyles={'bo g-3 btn-primary'} >
                  <Box  globalStyles={'bo '}  >
                      Get In Touch
                  </Box>
                  <Box  globalStyles={'bo'}  >
                      <AiOutlineArrowRight fontSize={'1.5rem'} />
                  </Box>
                </Row>
              </Link>
            </Col>
          </Col>
        </Col>

  );
}