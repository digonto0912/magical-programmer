import React, {useState, useEffect} from 'react';
import "./Dashboard.css";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function Dashboard(props) {
  
  // UseState
  // html css demo video
  const [HTMLvideoLists, setHTMLvideoLists] = useState([]);
  const [CSSvideolists, setCSSvideoLists] = useState([]);
  
  //course info card
  const [corse1Infos, setcorse1Infos] = useState([]);
  const [corse2Infos, setcorse2Infos] = useState([]);
  
  // home page blog card
  const [cardDatas, setcardDatas] = useState([]);
  
  // course page 1st course infos card
  const [cards1stsections, setcards1stsections] = useState([]);

  // course page 2nd course infos card
  const [cards2ndsections, setcards2ndsections] = useState([]);

  // course page 3rd course infos card
  const [cards3rdsections, setcards3rdsections] = useState([]);

  // Payment
  // payment Rules 
  const [PayRules, setPayRules] = useState([]);

  // Bkash Payment Info
  const [bkashPaymentInfos, setBkashPaymentInfos] = useState([]);

  //video list
  const [VideoLists, setVideoLists] = useState([]);

  

  // useEffect
  // html css demo video
  useEffect(()=>{
    fetch("http://localhost:2333/htmlDemoVideos")
    .then(res => res.json())
    .then(data => setHTMLvideoLists(data))
  },[]);
  
  useEffect(()=>{
    fetch("http://localhost:2333/cssDemoVideos")
    .then(res => res.json())
    .then(data => setCSSvideoLists(data))
  },[]);
  
  //course info card
  useEffect(()=>{
    fetch("http://localhost:2333/CourseInfosApi1")
      .then(res => res.json())
      .then(data => setcorse1Infos(data))
  },[])

  useEffect(()=>{
      fetch("http://localhost:2333/CourseInfosApi2")
      .then(res => res.json())
      .then(data => setcorse2Infos(data))
  },[])

  // home page blog card
  useEffect(()=>{
      fetch("http://localhost:2333/BlogsCardsApi")
      .then(res => res.json())
      .then(data => setcardDatas(data))
  },[]);

  // course page course infos card
  useEffect(()=>{
    fetch("http://localhost:2333/CIC3Card1stApi")
    .then(res => res.json())
    .then(data => setcards1stsections(data))
  },[]);
  
  useEffect(()=>{
    fetch("http://localhost:2333/CIC3Card2ndApi")
    .then(res => res.json())
    .then(data => setcards2ndsections(data))
  },[]);
  
  useEffect(()=>{
    fetch("http://localhost:2333/CIC3Card3rdApi")
    .then(res => res.json())
    .then(data => setcards3rdsections(data))
  },[]);

  // Payment
  // payment Rules
  useEffect(()=>{
    fetch("http://localhost:2333/PaymentSystemRuls")
    .then(res => res.json())
    .then(data => setPayRules(data))
  },[])

  // Bkash Payment Info
  useEffect(()=>{
    fetch("http://localhost:2333/bkashPaymentInfo")
    .then(res => res.json())
    .then(data => setBkashPaymentInfos(data))
  },[])

  // video List
  useEffect(()=>{
    fetch("http://localhost:2333/videoList")
    .then(res => res.json())
    .then(data => setVideoLists(data))
  },[]);

  // Delete Fetch
  const deleteHtmlDemoVideo = id => {
    fetch(`http://localhost:2333/HtmlDemoVideoDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }


  // MUI drawer
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
            
            {/* Bkash Payment Infos */}
            <div className='Users'>
              <div className="box-name-and-add">
                  <h2>Bkash Payment Infos</h2>
              </div>
              
              
            {
              bkashPaymentInfos.map(bkashPaymentInfo => <div className="User">
                
                <div className="infoBox">
                <div>
                    Number: {bkashPaymentInfo.phoneNumber}
                </div>
                <div>
                    Bkash Code: {bkashPaymentInfo.bkashCode}
                </div>
                </div>

                <div>
                  <button>
                    Massage
                  </button>
                  <button>
                    x
                  </button>
                </div>
              </div>
          )
        }
        </div>

            {/* HTML Demo Video */}
            <div className='Users'>
              <div className="box-name-and-add">
                  <h2>HTML Demo Video </h2>
                  <a href="/AddInfosHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
              </div>
              
              
            {
              HTMLvideoLists.map(HTMLvideoList => <div className="User">
                
                <div>
                <div>
                    Number: {HTMLvideoList.number}
                </div>
                <div>
                    videoName: {HTMLvideoList.videoName}
                </div>
                <div>
                    videoDuration: {HTMLvideoList.videoDuration}
                </div>
                <div>
                    videoDis: {HTMLvideoList.videoDis}
                </div>
                </div>

                <div> 
                  <a href={`/UpdateHtmlDemoVideo/${HTMLvideoList._id}`}>
                    <button>
                        update
                    </button>
                  </a>
                    <button onClick={() => deleteHtmlDemoVideo(HTMLvideoList._id)}>
                        x
                    </button>
                </div>
              </div>
          )
        }
        </div>
          

            {/* CSS Demo Video */}
            {
              CSSvideolists.map(CSSvideolist =><div className='Users'>
              <div className="box-name-and-add">
                      <h2>CSS Demo Video </h2>
                      <a href="/AddInfosCssDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    
                    <div>
                    <div>
                        Number: {CSSvideolist.number}
                    </div>
                    <div>
                        videoName: {CSSvideolist.videoName}
                    </div>
                    <div>
                        videoDuration: {CSSvideolist.videoDuration}
                    </div>
                    <div>
                        videoDis: {CSSvideolist.videoDis}
                    </div>
                    </div>
    
                    <div> 
                      <a href="/UpdateCssDemoVideo">
                        <button>
                            update
                        </button>
                      </a>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
              )
            }
          
            
            {/* Blogs Cards */}
            {
            cardDatas.map(cardData => <div className='Users'>
          <div className="box-name-and-add">
                  <h2>Blogs Cards</h2>
                  <a href="/AddInfosBlogCard">
                    <button>
                        +
                    </button>
                  </a>
              </div>
              
              <div className="User">
                <div>
                    blogImg: {cardData.blogImg}
                </div>
                <div>
                    blogName: {cardData.blogName}
                </div>
                <div>
                    blogReating: {cardData.blogReating}
                </div>
                <div>
                    color: {cardData.color}
                </div>
                <div> 
                  <a href="/UpdateBlogCard">
                    <button>
                        update
                    </button>
                  </a>
                    <button>
                        x
                    </button>
                </div>
              </div>
          </div>
          )
          }
          
            
            {/* Course Infos 1 */}
            {
              corse1Infos.map(corse1Info => <div className='Users'>
              <div className="box-name-and-add">
                      <h2>Course Infos 1</h2>
                      <a href="/AddInfosCourseInfoCard1">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    <div>
                        Number: {corse1Info.number}
                    </div>
                    <div>
                        CInfo: {corse1Info.CInfo}
                    </div>
                    <div>
                        lvl: {corse1Info.lvl}
                    </div>
    
                    <div> 
                      <a href="/UpdateCourseInfoCard1">
                        <button>
                            update
                        </button>
                        </a>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
              )
            }
          
            {/* Course Infos 2 */}
            {
              corse2Infos.map(corse2Info => <div className='Users'>
              <div className="box-name-and-add">
                      <h2>Course Infos 2</h2>
                      <a href="/AddInfosCourseInfoCard2">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    <div>
                        Number: {corse2Info.number}
                    </div>
                    <div>
                        CInfo: {corse2Info.CInfo}
                    </div>
                    <div>
                        lvl: {corse2Info.lvl}
                    </div>
    
                    <div> 
                      <a href="/UpdateCourseInfoCard2">
                        <button>
                            update
                        </button>
                      </a>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
            )
            }
          
            
            {/* Course Page Cars 1st  */}
            {
              cards1stsections.map(cards1stsection => <div className='Users'>
              <div className="box-name-and-add">
                      <h2>Course Page Cars 1st</h2>
                      <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    <div>
                        img: {cards1stsection.img}
                    </div>
                    <div>
                        headline: {cards1stsection.headline}
                    </div>
                    <div>
                        reating: {cards1stsection.reating}
                    </div>
                    
                    <div> 
                        <button>
                            update
                        </button>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
              )
            }
            
            {/* Course Page Cars 2nd */}
            {
              cards2ndsections.map(cards2ndsection => <div className='Users'>
              <div className="box-name-and-add">
                      <h2>Course Page Cars 2nd</h2>
                                        <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    <div>
                        num: {cards2ndsection.num}
                    </div>
                    <div>
                        texts: {cards2ndsection.texts}
                    </div>
                    <div> 
                        <button>
                            update
                        </button>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
              )
            }
          
            {/* Course Page Cars 3rd  */}
            {
              cards3rdsections.map(cards3rdsection => <div className='Users'>
              <div className="box-name-and-add">
                      <h2>Course Page Cars 3rd</h2>
                                        <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
                  </div>
                  
                  <div className="User">
                    <div>
                        img: {cards3rdsection.img}
                    </div>
                    <div>
                        whatYouLearn: {cards3rdsection.whatYouLearn}
                    </div>
                    <div>
                        link: {cards3rdsection.link}
                    </div>
    
                    <div> 
                        <button>
                            update
                        </button>
                        <button>
                            x
                        </button>
                    </div>
                  </div>
              </div>
              )
            }
          
            
            {/* Payment System Ruls */}
            {
              PayRules.map(PayRule => <div className='Users'>
              <div className="box-name-and-add">
                    <h2>Payment System Ruls</h2>
                                      <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
                </div>
                
                <div className="User">
                  <div>
                      rule: {PayRules.rule}
                  </div>
                  <div> 
                      <button>
                          update
                      </button>
                      <button>
                          x
                      </button>
                  </div>
                </div>
            </div>)
            }
          
            
            
            {/* video List */}
            {
              VideoLists.map(VideoList => <div className='Users'>
              <div className="box-name-and-add">
                  <h2>video List</h2>
                                    <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
              </div>
              
              <div className="User">
                <div>
                    milestoneId: 2
                </div>
                <div>
                    headline: bla bla bla
                </div>
                <div>
                    timeDuration: 2hr 10min
                </div>
                <div>
                    complited: 10/15
                </div>
                <div>
                    moduleCardsId: MCI-2
                </div>
                <div>
                    moduleCardName: card er vitor card pothom ta aro vaki ache 1 ta .
                </div>
                <div>
                    videoName: card er bhitor card and tar o vitor card r baki nai 1 ta o.
                </div>

                <div> 
                    <button>
                        update
                    </button>
                    <button>
                        x
                    </button>
                </div>
              </div>
          </div>
          )
            }
          
            
            {/* Users */}
          <div className='Users'>
            <div className="box-name-and-add">
              <h2>User</h2>
                                <a href="/UpdateHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
            </div>
              <div className="User">
                <div>
                    name: fardul islam digonto
                </div>
                <div>
                    email: fardulislamdigonto799@gmail.com
                </div>
                
                <div> 
                    <button>
                        update
                    </button>
                    <button>
                        x
                    </button>
                </div>
              </div>
          </div>
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
