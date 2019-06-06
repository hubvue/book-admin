-- MySQL dump 10.13  Distrib 5.6.43, for Linux (x86_64)
--
-- Host: localhost    Database: bookadmin
-- ------------------------------------------------------
-- Server version	5.6.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `book_id` int(10) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(50) NOT NULL,
  `book_author` varchar(50) NOT NULL,
  `book_press` varchar(50) NOT NULL,
  `book_time` varchar(20) NOT NULL,
  `book_price` float NOT NULL,
  `book_isbn` varchar(30) NOT NULL,
  `book_introduction` text NOT NULL,
  `book_image` varchar(100) NOT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (13,'JavaScript权威指南','弗拉纳根 ','机械工业出版社','2019-01-18 14:30',109,'9787111216322','《JavaScript权威指南(第5版)》全面介绍了JavaScript语言的核心，以及Web浏览器中实现的遗留和标准的DOM。它运用了一些复杂的例子，说明如何处理验证表单数据、使用cookie、创建可移植的DHTML动画等常见任务。\n《JavaScript权威指南(第5版)》还包括详细的参考手册，涵盖了JavaScript的核心API、遗留的客户端API和W3C标准DOM API，记述了这些API中的每一个JavaScript对象、方法、性质、构造函数、常量和事件处理程序。','https://img3.doubanio.com/view/subject/l/public/s5860151.jpg'),(14,'JavaScript 函数式编程','[美] Michael Fogus ','人民邮电出版社','2018-05-16 14:30',49,'9787115390608','javaScript 是近年来非常受瞩目的一门编程语言，它既支持面向对象编程，也支持函数式编程。本书专门介绍JavaScript函数式编程的特性。\r\n全书共9章，分别介绍了JavaScript函数式编程、一等函数与Applicative编程、变量的作用域和闭包、高阶函数、由函数构建函数、递归、纯度和不变性以及更改政策、基于流的编程、类编程。除此之外，附录中还介绍了更多函数式JavaScript。','https://img1.doubanio.com/view/subject/l/public/s28263518.jpg'),(15,'JavaScript语言精粹','Douglas Crockford ','电子工业出版社','2014-03-05 14:30',35,'9787121084379','本书通过对JavaScript语言的分析，甄别出好的和坏的特性，从而提取出相对这门语言的整体而言具有更好的可靠性、可读性和可维护性的JavaScript的子集，以便你能用它创建真正可扩展的和高效的代码。\r\n雅虎资深JavaScript架构师Douglas Crockford倾力之作。\r\n向读者介绍如何运用JavaScript创建真正可扩展的和高效的代码。','https://img3.doubanio.com/view/subject/l/public/s3651235.jpg'),(16,'高性能JavaScript','[美] 尼古拉斯·泽卡斯 ','电子工业出版社','2019-06-05 18:35',49,'9787121119323','如果你使用JavaScript构建交互丰富的Web应用，那么JavaScript代码可能是造成你的Web应用速度变慢的主要原因。《高性能JavaScript》揭示的技术和策略能帮助你在开发过程中消除性能瓶颈。你将会了解如何提升各方面的性能，包括代码的加载、运行、DOM交互、页面生存周期等。雅虎的前端工程师Nicholas C. Zakas和其他五位JavaScript专家介绍了页面代码加载的最佳方法和编程技巧，来帮助你编写更为高效和快速的代码。你还会了解到构建和部署文件到生产环境的最佳实践，以及有助于定位线上问题的工具。','https://img3.doubanio.com/view/subject/l/public/s4538004.jpg'),(17,'JavaScript设计模式','张容铭 ','人民邮电出版社','2015-08-01 00:00',59,'9787115396860','《JavaScript设计模式》共分六篇四十章，首先讨论了几种函数的编写方式，体会JavaScript在编程中的灵活性；然后讲解了面向对象编程的知识，其中讨论了类的创建、数据的封装以及类之间的继承；最后探讨了各种模式的技术，如简单工厂模式，包括工厂方法模式、抽象工厂模式、建造者模式、原型模式、单例模式，以及外观模式，包括适配器模式。本书还讲解了几种适配器、代理模式、装饰者模式和MVC模式，讨论了如何实现对数据、视图、控制器的分离。在讲解MVP模式时，讨论了如何解决数据与视图之间的耦合，并实现了一个模板生成器；讲解MVVM模式时，讨论了双向绑定对MVC的模式演化。本书几乎包含了关于JavaScript设计模式的全部知识，是进行JavaScript高效编程必备的学习手册。','https://img1.doubanio.com/view/subject/l/public/s28273777.jpg'),(18,'图解HTTP','[日] 上野宣 ','人民邮电出版社','2014-04-15 05:05',49,'9787115351531','本书对互联网基盘——HTTP协议进行了全面系统的介绍。作者由HTTP协议的发展历史娓娓道来，严谨细致地剖析了HTTP协议的结构，列举诸多常见通信场景及实战案例，最后延伸到Web安全、最新技术动向等方面。本书的特色为在讲解的同时，辅以大量生动形象的通信图例，更好地帮助读者深刻理解HTTP通信过程中客户端与服务器之间的交互情况。读者可通过本书快速了解并掌握HTTP协议的基础，前端工程师分析抓包数据，后端工程师实现REST API、实现自己的HTTP服务器等过程中所需的HTTP相关知识点本书均有介绍。','https://img3.doubanio.com/view/subject/l/public/s27283822.jpg'),(20,'深入浅出Node.js','朴灵 ','人民邮电出版社','2013-12-02 00:25',69,'9787115335500','本书从不同的视角介绍了 Node 内在的特点和结构。由首章Node 介绍为索引，涉及Node 的各个方面，主要内容包含模块机制的揭示、异步I/O 实现原理的展现、异步编程的探讨、内存控制的介绍、二进制数据Buffer 的细节、Node 中的网络编程基础、Node 中的Web 开发、进程间的消息传递、Node 测试以及通过Node 构建产品需要的注意事项。最后的附录介绍了Node 的安装、调试、编码规范和NPM 仓库等事宜。','https://img3.doubanio.com/view/subject/l/public/s27269296.jpg'),(76,'王冲','王冲','王冲','往常',40,'12313131','fdafa','放大法师');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'wang','chong');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-28 22:48:49
