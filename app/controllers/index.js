var News       = require('../models/news')
var Comment    = require('../models/comment')


//index page
exports.index = function(req,res){
		console.log('user in session: ')
		console.log(req.session.user)

		res.render('index',{
			title: 'zzc',
			introduce: '程氏星辉（北京）文化传播有限公司业务涉猎范围广泛，拥有海量资源和优质客户。丰富的制作经验，使公司在运作每一个项目时，都会根据客户自身的特色和诉求，遵照“充分沟通、准确理解、精心策划和制作精良”的创作原则，为客户量身定制符合自身特色及品味的产品。    公司创始人近十年来，先后为中国建设银行总行、中国建设银行北京分行、央视网、山东潍坊港航局、江苏昆山市政府、北京市东城区文联、长城汽车、双汇集团等企事业单位提供服务，参与策划执行2014年亚太经合组织（APEC）工商咨询理事会迎宾晚宴，承办2011——2014中国建设银行总行春节团拜会、节日演出、部门宣传片制作、公关部统一印刷制品设计，拍摄江苏省昆山市锦溪古镇旅游宣传片，参与执行北京市东城区朝阳门原创歌曲演唱会，拍摄长城汽车及双汇集团产品系列广告。此外，与中央电视台、北京、天津、上海、山西、江苏、浙江、香港、澳亚等多家卫视以及新浪、腾讯、搜狐、网易等门户网站建立了良好的媒体合作关系。在近年业务实践中，公司凭借扎实过硬的专业能力、质优价廉的产品开发赢得了广大客户的好评，在同业竞争中居于领先地位。',
			madeVideoP1: 'FILM AND TELEVISION  PRODUCTION',
			madeVideoP2: '用视觉传播塑造企业形象，专业的影视制作团队，8年的实战经验总结和众多的成功案例，一直追求创意思维+高效执行',
			indexadP1: '做企业的视觉品牌管家',
			indexadP2: '我们在广告领域，一直追求创意是王道，硬件是辅助的理念赢得了众多客户的认同在广告拍摄中，选取更适合更精准的视频影视创意，位企业对外宣传播奠定了基础',
			activityPlanningp1: '活动策划执行',
			activityPlanningp2: 'Activity Planning',
			activityPlanningp3: '活动策划绝不是单单的一次活动、一场晚会。我们在活动策划执行领域有着丰富的经验，精准的客户需求把控，完美而周到的服务以及每一个操作细节的苛求为您呈现一场完美的活动。',
			COMMERCIALPHOTOGRAPHYP1: '商业摄影',
			COMMERCIALPHOTOGRAPHYP2: 'COMMERCIAL PHOTOGRAPHY',
			COMMERCIALPHOTOGRAPHYP3: '从活动前期的整体策划到现场执行、后期宣传，为您提供一站式的专业服务，我们拥有资深的创意策划人员及统筹人员以及丰富的组织和实践经验',
			teamP1: '我们的团队',
			teamP2: 'TEAM',
			teamP2: '我们的生存，就是在恶劣的环境中坚强地创造生存空间；我们的团队，就是在充满争斗的对手中组织强大的团队力量；我们的智慧，就是在强着之列不断竞争、超越！'
	})
}

//brandMarketing page

exports.brandMarketing = function(req,res){
	res.render('brandMarketing',{
		title: 'zzc'
	})
}

//Filmproduction page

exports.Filmproduction = function(req,res){
	res.render('Filmproduction',{
		title: 'zzc'
	})
}

//AboutUs page

exports.AboutUs = function(req,res){
    News.fetch(function(err, news){
    	if(err){
    		console.log(err)
    	}

    	res.render('AboutUs',{
		title: 'zzc',
		introduce: '程氏星辉（北京）文化传播有限公司业务涉猎范围广泛，拥有海量资源和优质客户。丰富的制作经验，使公司在运作每一个项目时，都会根据客户自身的特色和诉求，遵照“充分沟通、准确理解、精心策划和制作精良”的创作原则，为客户量身定制符合自身特色及品味的产品。    公司创始人近十年来，先后为中国建设银行总行、中国建设银行北京分行、央视网、山东潍坊港航局、江苏昆山市政府、北京市东城区文联、长城汽车、双汇集团等企事业单位提供服务，参与策划执行2014年亚太经合组织（APEC）工商咨询理事会迎宾晚宴，承办2011——2014中国建设银行总行春节团拜会、节日演出、部门宣传片制作、公关部统一印刷制品设计，拍摄江苏省昆山市锦溪古镇旅游宣传片，参与执行北京市东城区朝阳门原创歌曲演唱会，拍摄长城汽车及双汇集团产品系列广告。此外，与中央电视台、北京、天津、上海、山西、江苏、浙江、香港、澳亚等多家卫视以及新浪、腾讯、搜狐、网易等门户网站建立了良好的媒体合作关系。在近年业务实践中，公司凭借扎实过硬的专业能力、质优价廉的产品开发赢得了广大客户的好评，在同业竞争中居于领先地位。',
		news: news
	  })
   })	
}

//Eventplanning page

exports.Eventplanning = function(req,res){
	res.render('Eventplanning',{
		title: 'zzc'
	})
}


//Contactus page

exports.Contactus = function(req,res){
	Comment.find()
		.populate('from','name')
		.populate('reply.from reply.to', 'name')
		.exec(function(err, comments){
			console.log(comments)
			res.render('Contactus',{
				title: 'zzc',
				comments: comments
			})
		})
}
