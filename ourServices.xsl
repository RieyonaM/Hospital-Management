<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h3>Our Services</h3>
<table border="1px">
<tr>
<th>Title</th>
<th>Started_year</th>
<th>Rank_World_Wide</th>
</tr>
<xsl:for-each select="ourServices/service">
<xsl:sort select="startedYear"/>
<tr>
<td><xsl:value-of select="title"/></td>
<td><xsl:value-of select="startedYear"/></td>
<td><xsl:value-of select="curRankWW"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>