# Generated by Django 2.2.3 on 2019-08-02 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_auto_20190802_1527'),
    ]

    operations = [
        migrations.RenameField(
            model_name='instituicao',
            old_name='nome',
            new_name='nome_empresa',
        ),
        migrations.AlterField(
            model_name='cliente',
            name='senha',
            field=models.CharField(max_length=255, verbose_name='Senha'),
        ),
    ]
