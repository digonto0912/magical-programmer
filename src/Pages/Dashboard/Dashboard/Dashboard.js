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
  
  // home page courses Infos Dark Card
  const [CIDCHs, setCIDCHs] = useState([]);

  // course page courses Infos Dark Card
  const [CIDCCs, setCIDCCs] = useState([]);

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

  // course Infos Dark Cards
  useEffect(()=>{
    fetch("http://localhost:2333/CIDCH")
    .then(res => res.json())
    .then(data => setCIDCHs(data))
  },[]);
  useEffect(()=>{
    fetch("http://localhost:2333/CIDCC")
    .then(res => res.json())
    .then(data => setCIDCCs(data))
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
  //html and css demo video
  const deleteHtmlDemoVideo = id => {
    fetch(`http://localhost:2333/HtmlDemoVideoDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCssDemoVideo = id => {
    fetch(`http://localhost:2333/CssDemoVideoDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  // cInfos 2 card 
  const deleteCourseInfoCard1 = id => {
    fetch(`http://localhost:2333/CourseInfoCard1Delete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCourseInfoCard2 = id => {
    fetch(`http://localhost:2333/CourseInfoCard2Delete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  //blog card
  const deleteBlogCard = id => {
    fetch(`http://localhost:2333/BlogCardDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  // CIC 3 card
  const deleteCIC3Card1stApi = id => {
    fetch(`http://localhost:2333/CIC3Card1stApiDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCIC3Card2ndApi = id => {
    fetch(`http://localhost:2333/CIC3Card2ndApiDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCIC3Card3rdApi = id => {
    fetch(`http://localhost:2333/CIC3Card3rdApiDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCIDCH = id => {
    fetch(`http://localhost:2333/CIC3Card3rdApiDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }
  const deleteCIDCC = id => {
    fetch(`http://localhost:2333/CIC3Card3rdApiDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  // PaymentSystemRules
  const deletePaymentSystemRules = id => {
    fetch(`http://localhost:2333/PaymentSystemRulesDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  // VideoList
  const deleteVideoList = id => {
    fetch(`http://localhost:2333/VideoListDelete/${id}`, {
      method:"DELETE"
    })
    .then()
  }

  // payment info true btn update
  const PITBU = (email, courseName) => {
    const userPay = {userPay:true, courseName:courseName};
    
    fetch(`http://localhost:2333/UpdateUserPay/${email}`, {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPay)
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
                <div>
                    email: {bkashPaymentInfo.email}
                </div>
                <div>
                    course Name: {bkashPaymentInfo.course}
                </div>
                </div>

                <div>
                  <button>
                    Massage
                  </button>
                  <button onClick={() => PITBU(bkashPaymentInfo.email, bkashPaymentInfo.course)}>
                    True
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
                  <a href= "/AddInfosHtmlDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
              </div>
               
            {
              HTMLvideoLists.map(HTMLvideoList => <div className="User">
                
                <div>
                <div>
                    number: {HTMLvideoList.number}
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
            <div className='Users'>
              <div className="box-name-and-add">
                      <h2>CSS Demo Video </h2>
                  <a href="/AddInfosCssDemoVideo">
                    <button>
                        +
                    </button>
                  </a>
              </div>
              
              {
              CSSvideolists.map(CSSvideolist =><div className="User">
                    
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
                      <a href={`/UpdateCssDemoVideo/${CSSvideolist._id}`}>
                        <button>
                            update
                        </button>
                      </a>
                    <button onClick={() => deleteCssDemoVideo(CSSvideolist._id)}>
                        x
                    </button>
                    </div>
              </div>
              )
              }
            </div>
          
            
            {/* Blogs Cards */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Blogs Cards</h2>
                <a href="/AddInfosBlogCard">
                  <button>
                    +
                  </button>
                </a>
              </div>
              
              {
                cardDatas.map(cardData =><div className="User"> 
              
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
                <a href={`/UpdateBlogCard/${cardData._id}`}>
                    <button>
                        update
                    </button>
                  </a>
                    <button onClick={() => deleteBlogCard(cardData._id)}>
                        x
                    </button>
                </div>
              </div>
              )
              }
            </div>
          
            
            {/* Course Infos 1 */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Course Infos 1</h2>
                <a href="/AddInfosCourseInfoCard1">
                  <button>
                    +
                  </button>
                </a>
              </div>
              
              {
              corse1Infos.map(corse1Info => <div className="User">
                    <div>
                        number: {corse1Info.number}
                    </div>
                    <div>
                        CInfo: {corse1Info.CInfo}
                    </div>
                    <div>
                        lvl: {corse1Info.lvl}
                    </div>
    
                    <div> 
                    <a href={`/UpdateCourseInfoCard1/${corse1Info._id}`}>
                        <button>
                            update
                        </button>
                        </a>
                    <button onClick={() => deleteCourseInfoCard1(corse1Info._id)}>
                        x
                    </button>
                    </div>
                  </div>
              )
              }
            </div>
          
            {/* Course Infos 2 */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Course Infos 2</h2>
                <a href="/AddInfosCourseInfoCard2">
                  <button>
                    +
                  </button>
                </a>
              </div>
              
              {
              corse2Infos.map(corse2Info => <div className="User">
                    <div>
                        number: {corse2Info.number}
                    </div>
                    <div>
                        CInfo: {corse2Info.CInfo}
                    </div>
                    <div>
                        lvl: {corse2Info.lvl}
                    </div>
    
                    <div> 
                    <a href={`/UpdateCourseInfoCard2/${corse2Info._id}`}>
                        <button>
                            update
                        </button>
                      </a>
                    <button onClick={() => deleteCourseInfoCard2(corse2Info._id)}>
                        x
                    </button>
                    </div>
                    </div>
              )
              }
            </div>
          
            
            {/* Course Page Cards 1st  */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Course Page Cards 1st</h2>
                <a href="/AddInfosCIC3Card1stApi">
                    <button>
                        +
                    </button>
                  </a>
              </div>
              
              
            {
              cards1stsections.map(cards1stsection => <div className="User">
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
                    <a href={`/UpdateCIC3Card1stApi/${cards1stsection._id}`}>
                        <button>
                            update
                        </button>
                    </a>
                    <button onClick={() => deleteCIC3Card1stApi(cards1stsection._id)}>
                        x
                    </button>
                    </div>
                  </div>
            )
            }
            </div>
            
            {/* Course Page Cards 2nd */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Course Page Cards 2nd</h2>
                <a href="/AddInfosCIC3Card2ndApi">
                  <button>
                    +
                  </button>
                </a>
              </div>

            {
              cards2ndsections.map(cards2ndsection => <div className="User">
                    <div>
                        num: {cards2ndsection.num}
                    </div>
                    <div>
                        texts: {cards2ndsection.texts}
                    </div>
                    <div> 
                    <a href={`/UpdateCIC3Card2ndApi/${cards2ndsection._id}`}>
                        <button>
                            update
                        </button>
                    </a>
                    <button onClick={() => deleteCIC3Card2ndApi(cards2ndsection._id)}>
                        x
                    </button>
                    </div>
                  </div>
            )
            }
            </div>
          
            {/* Course Page Cards 3rd  */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Course Page Cards 3rd</h2>
                <a href="/AddInfosCIC3Card3rdApi">
                  <button>
                    +
                  </button>
                </a>
              </div>
            
            {
              cards3rdsections.map(cards3rdsection => <div className="User">
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
                    <a href={`/UpdateCIC3Card3rdApi/${cards3rdsection._id}`}>
                        <button>
                            update
                        </button>
                    </a>
                    <button onClick={() => deleteCIC3Card3rdApi(cards3rdsection._id)}>
                        x
                    </button>
                    </div>
                  </div>
            )
            }
            </div>
          
            
            {/* Payment System Ruls */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>Payment System Ruls</h2>
                <a href="/PaymentSystemRulesAddInfos">
                  <button>
                    +
                  </button>
                </a>
              </div>
            
            {
              PayRules.map(PayRule => <div className="User">
                  <div>
                      rule: {PayRule.rule}
                  </div>
                  <div> 
                    <a href={`/UpdatePaymentSystemRules/${PayRule._id}`}>
                        <button>
                            update
                        </button>
                    </a>
                    <button onClick={() => deletePaymentSystemRules(PayRule._id)}>
                        x
                    </button>
                  </div>
                </div>
            )
            }
            </div>
            
            
            {/* video List */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>video List</h2>
                <a href="/VideoListAddInfos">
                  <button>
                    +
                  </button>
                </a>
              </div>

            {
              VideoLists.map(VideoList => <div className="User">
                <div>
                    milestoneId: {VideoList.milestoneId}
                </div>
                <div>
                    headline: {VideoList.headline}
                </div>
                <div>
                    timeDuration: {VideoList.timeDuration}
                </div>
                <div>
                    complited: {VideoList.complited}
                </div>
                <div>
                    Img: {VideoList.img}
                </div>
                <div>
                    moduleCardsId: {VideoList.moduleCards.moduleCardsId}
                </div>
                <div>
                    moduleCardName: {VideoList.moduleCards.moduleCard.moduleCardName}
                </div>
                <div>
                    videoName: {VideoList.moduleCards.moduleCard.videoName}
                </div>

                <div> 
                    <a href={`/UpdateVideoList/${VideoList._id}`}>
                        <button>
                            update
                        </button>
                    </a>
                    <button onClick={() => deleteVideoList(VideoList._id)}>
                        x
                    </button>
                </div>
              </div>
            )
            }
            </div>
          
            
          {/* CIDCC */}
          <div className='Users'>
            <div className="box-name-and-add">
              <h2>CIDCC</h2>
              <a href="/AddInfosCIDCC">
                <button>
                  +
                </button>
              </a>
            </div>
          
          {
            CIDCCs.map(CIDCC => <div className="User">
                <div>
                    Img: {CIDCC.img}
                </div>
                <div>
                    headline: {CIDCC.headline}
                </div>
                <div>
                  Time Start: {CIDCC.timeStart}
                </div>
                <div>
                  Time End: {CIDCC.timeEnd}
                </div>
                <div>
                  Class Start: {CIDCC.classStart}
                </div>
                <div>
                  Start BTN Headline: {CIDCC.StartBTNHeadline}
                </div>
                <div>
                  BTN Text: {CIDCC.BTNText}
                </div>

                <div> 
                  <a href={`/UpdateCIDCC/${CIDCC._id}`}>
                      <button>
                          update
                      </button>
                  </a>
                  <button onClick={() => deleteCIDCC(CIDCC._id)}>
                      x
                  </button>
                </div>
              </div>
          )
          }
          </div>
          
            
          {/* CIDCH */}
          <div className='Users'>
            <div className="box-name-and-add">
              <h2>CIDCH</h2>
              <a href="/AddInfosCIDCH">
                <button>
                  +
                </button>
              </a>
            </div>
          
          {
            CIDCHs.map(CIDCH => <div className="User">
                <div>
                    Img: {CIDCH.img}
                </div>
                <div>
                    headline: {CIDCH.headline}
                </div>
                <div>
                  subline: {CIDCH.subline}
                </div>
                <div>
                  {
                    CIDCH.tipsInfos.map(tipInfo=><div>
                      <div>Tipe Info title: {tipInfo.title}</div>
                      <div>Tipe Info Img: {tipInfo.img}</div>
                      <div>Tipe Info Img background: {tipInfo.imgBackgroundColor}</div>
                    </div>)
                  }
                </div>

                <div> 
                  <a href={`/UpdateCIDCH/${CIDCH._id}`}>
                      <button>
                          update
                      </button>
                  </a>
                  <button onClick={() => deleteCIDCH(CIDCH._id)}>
                      x
                  </button>
                </div>
              </div>
          )
          }
          </div>
            
            
            {/* Users */}
            <div className='Users'>
              <div className="box-name-and-add">
                <h2>User</h2>
                <a href="/user">
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
